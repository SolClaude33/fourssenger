# 🔥 Fourssenger

Un messenger moderno estilo MSN Messenger con temática crypto, construido con Next.js y Firebase.

![Fourssenger](https://img.shields.io/badge/Fourssenger-Chat%20App-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## ✨ Características

- 💬 **Chat en tiempo real** con Firebase Firestore
- 🎨 **Interfaz estilo MSN Messenger** con tema retro
- 🚀 **Múltiples salas de chat** (Lobby, BNB, USA, Dev)
- 👥 **Indicadores de escritura** en tiempo real
- 😊 **Soporte para emojis** y atajos personalizados
- 🎭 **Nombres de usuario aleatorios** con temática crypto
- 🎨 **Colores únicos** por usuario
- 📱 **Responsive design** para móviles y desktop
- 🔒 **Filtro de palabras inapropiadas**
- 💾 **Modo de respaldo** en memoria local

## 🚀 Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SolClaude33/fourssenger)

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Firebase Firestore
- **Styling**: Tailwind CSS, CSS Variables
- **UI Components**: Radix UI, Lucide Icons
- **Deployment**: Vercel

## 📦 Instalación

1. **Clona el repositorio**:
```bash
git clone https://github.com/SolClaude33/fourssenger.git
cd fourssenger
```

2. **Instala las dependencias**:
```bash
npm install --legacy-peer-deps
```

3. **Configura Firebase**:
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
   - Habilita Firestore Database
   - Copia la configuración del proyecto

4. **Configura variables de entorno**:
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales de Firebase:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tuproyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tuproyecto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tuproyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

5. **Configura reglas de Firestore**:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document} {
      allow read, write: if true;
    }
    match /typing_indicators/{document} {
      allow read, write: if true;
    }
  }
}
```

6. **Ejecuta el servidor de desarrollo**:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎮 Uso

1. **Únete al chat**: Se te asignará automáticamente un nombre de usuario con temática crypto
2. **Selecciona una sala**: Lobby, BNB, USA, o Dev
3. **Envía mensajes**: Escribe y presiona Enter
4. **Usa emojis**: Haz clic en el botón de emojis o usa atajos como `:rocket:`
5. **Ve indicadores de escritura**: Observa cuando otros usuarios están escribiendo

## 🎨 Temas y Personalización

El proyecto usa variables CSS para fácil personalización:

```css
:root {
  --msn-blue-700: #3a6ea5;
  --msn-blue-500: #5aa1e3;
  --msn-blue-200: #cde6ff;
  --success-green: #43b649;
  --alert-orange: #f5a623;
}
```

## 📁 Estructura del Proyecto

```
fourssenger/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal del chat
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI (Radix)
│   ├── modal.tsx         # Modal personalizado
│   └── emoji-picker.tsx  # Selector de emojis
├── lib/                  # Utilidades y configuración
│   ├── firebase/         # Configuración de Firebase
│   │   ├── config.ts     # Configuración principal
│   │   └── messages.ts   # Servicios de mensajes
│   └── utils.ts          # Utilidades generales
├── public/               # Archivos estáticos
│   ├── avatars/          # Avatares de usuarios
│   └── 4logo.png         # Logo de Fourssenger
└── scripts/              # Scripts SQL
    └── 001_create_chat_tables.sql
```

## 🚀 Deploy en Vercel

1. **Conecta tu repositorio** a Vercel
2. **Configura las variables de entorno** en Vercel:
   - Ve a Project Settings → Environment Variables
   - Agrega todas las variables `NEXT_PUBLIC_FIREBASE_*`
3. **Deploy automático**: Cada push a main desplegará automáticamente

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el framework
- [Firebase](https://firebase.google.com/) por la base de datos
- [Radix UI](https://www.radix-ui.com/) por los componentes
- [Lucide](https://lucide.dev/) por los iconos
- [Tailwind CSS](https://tailwindcss.com/) por el styling

## 📞 Contacto

**SolClaude33** - [@SolClaude33](https://github.com/SolClaude33)

Proyecto Link: [https://github.com/SolClaude33/fourssenger](https://github.com/SolClaude33/fourssenger)

---

⭐ ¡Dale una estrella si te gusta el proyecto!