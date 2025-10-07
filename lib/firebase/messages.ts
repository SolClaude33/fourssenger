import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  serverTimestamp,
  where,
  doc,
  setDoc,
  deleteDoc,
  getDocs
} from 'firebase/firestore'
import { db } from './config'

// Check if Firebase is available
const isFirebaseAvailable = () => {
  return typeof window !== 'undefined' && db !== null
}

export type Message = {
  id: string
  username: string
  user_color: string
  message: string
  created_at: any
  room: string
}

export type TypingIndicator = {
  id: string
  username: string
  user_color: string
  updated_at: any
  room: string
}

// Messages collection
const messagesCollection = 'messages'
const typingCollection = 'typing_indicators'

// Send a message
export const sendMessage = async (messageData: Omit<Message, 'id' | 'created_at'>) => {
  if (!isFirebaseAvailable()) {
    throw new Error('Firebase not available')
  }
  
  try {
    const docRef = await addDoc(collection(db, messagesCollection), {
      ...messageData,
      created_at: serverTimestamp()
    })
    return docRef.id
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}

// Get messages for a room
export const getMessages = (room: string, callback: (messages: Message[]) => void) => {
  if (!isFirebaseAvailable()) {
    console.log('Firebase not available, returning empty callback')
    return () => {} // Return empty unsubscribe function
  }
  
  const q = query(
    collection(db, messagesCollection),
    where('room', '==', room),
    orderBy('created_at', 'asc'),
    limit(50)
  )

  return onSnapshot(q, (snapshot) => {
    const messages: Message[] = []
    snapshot.forEach((doc) => {
      const data = doc.data()
      messages.push({
        id: doc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString()
      } as Message)
    })
    callback(messages)
  })
}

// Update typing indicator
export const updateTypingIndicator = async (room: string, username: string, userColor: string) => {
  if (!isFirebaseAvailable()) {
    return
  }
  
  try {
    const docRef = doc(db, typingCollection, `${room}_${username}`)
    await setDoc(docRef, {
      room,
      username,
      user_color: userColor,
      updated_at: serverTimestamp()
    })
  } catch (error) {
    console.error('Error updating typing indicator:', error)
  }
}

// Remove typing indicator
export const removeTypingIndicator = async (room: string, username: string) => {
  if (!isFirebaseAvailable()) {
    return
  }
  
  try {
    const docRef = doc(db, typingCollection, `${room}_${username}`)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error removing typing indicator:', error)
  }
}

// Get typing indicators
export const getTypingIndicators = (room: string, callback: (indicators: TypingIndicator[]) => void) => {
  if (!isFirebaseAvailable()) {
    console.log('Firebase not available, returning empty typing indicators')
    return () => {} // Return empty unsubscribe function
  }
  
  const q = query(
    collection(db, typingCollection),
    where('room', '==', room)
  )

  return onSnapshot(q, (snapshot) => {
    const indicators: TypingIndicator[] = []
    const now = new Date()
    const tenSecondsAgo = new Date(now.getTime() - 10000)

    snapshot.forEach((doc) => {
      const data = doc.data()
      const updatedAt = data.updated_at?.toDate?.()
      
      // Only include indicators updated within the last 10 seconds
      if (updatedAt && updatedAt > tenSecondsAgo) {
        indicators.push({
          id: doc.id,
          ...data,
          updated_at: updatedAt.toISOString()
        } as TypingIndicator)
      }
    })
    callback(indicators)
  })
}

// Clean up old typing indicators
export const cleanupOldTypingIndicators = async () => {
  if (!isFirebaseAvailable()) {
    return
  }
  
  try {
    const q = query(collection(db, typingCollection))
    const snapshot = await getDocs(q)
    const now = new Date()
    const tenSecondsAgo = new Date(now.getTime() - 10000)

    const batch = []
    snapshot.forEach((doc) => {
      const data = doc.data()
      const updatedAt = data.updated_at?.toDate?.()
      
      if (updatedAt && updatedAt < tenSecondsAgo) {
        batch.push(deleteDoc(doc.ref))
      }
    })

    await Promise.all(batch)
  } catch (error) {
    console.error('Error cleaning up typing indicators:', error)
  }
}
