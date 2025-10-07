# 🚀 Deploy en Vercel - Fourssenger

## Pasos para Deployar en Vercel

### 1. Conectar Repositorio a Vercel

1. **Ve a [Vercel](https://vercel.com)** y haz login
2. **Haz clic en "New Project"**
3. **Importa tu repositorio de GitHub**:
   - Busca `SolClaude33/fourssenger`
   - Haz clic en "Import"

### 2. Configurar Variables de Entorno

En la página de configuración del proyecto:

1. **Ve a "Environment Variables"**
2. **Agrega las siguientes variables**:

```
NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyC0TTjsV9jdsJkYBCzZ5-bg_XNIkrxTaYA
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = fourssenger.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID = fourssenger
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = fourssenger.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 1055943476899
NEXT_PUBLIC_FIREBASE_APP_ID = 1:1055943476899:web:d67a9184f3f0319d76a116
```

3. **Selecciona "Production", "Preview" y "Development"** para cada variable
4. **Haz clic en "Save"**

### 3. Configurar Build Settings

En la página de configuración:

1. **Framework Preset**: Next.js (debería detectarse automáticamente)
2. **Build Command**: `npm run build`
3. **Output Directory**: `.next` (por defecto)
4. **Install Command**: `npm install --legacy-peer-deps`

### 4. Deploy

1. **Haz clic en "Deploy"**
2. **Espera a que termine el build** (2-3 minutos)
3. **¡Listo!** Tu app estará disponible en la URL que te proporcione Vercel

## 🔧 Configuración Adicional

### Dominio Personalizado (Opcional)

1. **Ve a "Domains"** en tu proyecto
2. **Agrega tu dominio personalizado**
3. **Configura los DNS** según las instrucciones de Vercel

### Variables de Entorno por Ambiente

Puedes configurar variables diferentes para:
- **Production**: Para tu app en vivo
- **Preview**: Para branches de desarrollo
- **Development**: Para desarrollo local

## 🎯 URLs Importantes

- **Repositorio**: https://github.com/SolClaude33/fourssenger
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Firebase Console**: https://console.firebase.google.com/project/fourssenger

## 🚨 Troubleshooting

### Error de Build

Si hay errores de build:

1. **Revisa los logs** en Vercel Dashboard
2. **Verifica las variables de entorno**
3. **Asegúrate de que Firebase esté configurado**

### Error de Firebase

Si Firebase no funciona en producción:

1. **Verifica las reglas de Firestore**
2. **Confirma que las variables de entorno estén correctas**
3. **Revisa la consola del navegador** para errores

### Error de Dependencias

Si hay problemas con las dependencias:

1. **Usa `--legacy-peer-deps`** en el install command
2. **Verifica que todas las dependencias estén en package.json**

## 📱 Testing

Una vez deployado:

1. **Abre la URL de Vercel**
2. **Prueba enviar mensajes**
3. **Verifica que los indicadores de escritura funcionen**
4. **Prueba en diferentes dispositivos**

## 🔄 Deploy Automático

Cada vez que hagas push a la rama `master`:
- Vercel automáticamente detectará los cambios
- Hará un nuevo build
- Deployará la nueva versión

¡Tu Fourssenger estará siempre actualizado! 🎉
