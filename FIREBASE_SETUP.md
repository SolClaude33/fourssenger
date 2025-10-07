# 🔥 Configuración de Firebase para Fourssenger

## ✅ Migración Completada

La aplicación **Fourssenger** ha sido migrada exitosamente de Supabase a Firebase. Ahora usa **Firestore** para el almacenamiento de mensajes y **Firebase Realtime Database** para indicadores de escritura.

## 🚀 Pasos para Configurar Firebase

### 1. Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en **"Crear un proyecto"**
3. Ingresa el nombre del proyecto (ej: `foursseenger-chat`)
4. Habilita Google Analytics (opcional)
5. Haz clic en **"Crear proyecto"**

### 2. Configurar Firestore Database

1. En el panel izquierdo, haz clic en **"Firestore Database"**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de prueba"** (para desarrollo)
4. Elige una ubicación para tu base de datos
5. Haz clic en **"Listo"**

### 3. Configurar Reglas de Seguridad

En Firestore Database → Reglas, reemplaza las reglas con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura y escritura de mensajes (chat público)
    match /messages/{document} {
      allow read, write: if true;
    }
    
    // Permitir lectura y escritura de indicadores de escritura
    match /typing_indicators/{document} {
      allow read, write: if true;
    }
  }
}
```

### 4. Obtener Configuración del Proyecto

1. En el panel izquierdo, haz clic en **⚙️ Configuración del proyecto**
2. Desplázate hacia abajo hasta **"Tus aplicaciones"**
3. Haz clic en **"</>" (Web)**
4. Ingresa un nombre para tu app (ej: `foursseenger-web`)
5. **NO** marques "También configura Firebase Hosting"
6. Haz clic en **"Registrar app"**
7. Copia la configuración que aparece

### 5. Actualizar Variables de Entorno

Edita el archivo `.env.local` y reemplaza los valores de ejemplo con tu configuración real:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key_real_aqui
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tuproyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tuproyecto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tuproyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

### 6. Reiniciar la Aplicación

```bash
# Detener el servidor actual (Ctrl+C)
npm run dev
```

## 🎯 Funcionalidades Implementadas

### ✅ Mensajes en Tiempo Real
- Envío y recepción de mensajes instantáneos
- Múltiples salas de chat (lobby, bnb, usa, dev)
- Filtro de palabras inapropiadas
- Soporte para emojis y atajos

### ✅ Indicadores de Escritura
- Muestra cuando otros usuarios están escribiendo
- Limpieza automática de indicadores antiguos
- Colores únicos por usuario

### ✅ Modo de Respaldo
- Si Firebase no está configurado, usa almacenamiento en memoria
- Transición automática entre modos
- Experiencia de usuario consistente

## 🔧 Estructura de Datos

### Colección `messages`
```javascript
{
  id: "auto-generated",
  room: "lobby", // o "bnb", "usa", "dev"
  username: "DiamondHands1234",
  user_color: "#ff5733",
  message: "¡Hola a todos! 🚀",
  created_at: "timestamp"
}
```

### Colección `typing_indicators`
```javascript
{
  id: "room_username", // ej: "lobby_DiamondHands1234"
  room: "lobby",
  username: "DiamondHands1234",
  user_color: "#ff5733",
  updated_at: "timestamp"
}
```

## 🚨 Notas Importantes

1. **Modo de Prueba**: Las reglas de Firestore están en modo de prueba para desarrollo. Para producción, configura reglas más restrictivas.

2. **Límites de Firestore**: 
   - 1MB por documento
   - 1 millón de documentos por colección
   - 20,000 lecturas/escrituras por día (plan gratuito)

3. **Seguridad**: Considera implementar autenticación de usuarios para producción.

## 🎉 ¡Listo!

Tu aplicación **Fourssenger** ahora está configurada con Firebase y lista para usar. Los mensajes se sincronizarán en tiempo real entre todos los usuarios conectados.

**URL de la aplicación**: http://localhost:3000
