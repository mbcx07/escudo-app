# 🛡️ ESCUDO — El Juego del Guerrero Interior (PWA)

Aplicación móvil web progresiva del juego de cartas ESCUDO, diseñada para construir autoestima, asertividad y defensa contra el bullying en niños y adolescentes.

Basado en el método de **Psicología Frecuencial** de Moisés Beltrán.

## 📱 Características

- **Modo Juego** — 2-6 jugadores en el mismo dispositivo con turnos, votaciones y marcador
- **Mis Cartas** — Explora las 120 cartas organizadas por tipo, con favoritos y búsqueda
- **Desafío Diario** — Un reto nuevo cada día con sistema de rachas
- **Anti-Bullying** — 10 escenarios interactivos para practicar respuestas asertivas
- **Frecuencias** — Reproductor de frecuencias binaurales (396Hz, 432Hz, 528Hz, 639Hz, 741Hz, 852Hz) con visualización y guía de respiración
- **Perfil del Guerrero** — Estadísticas, niveles (Novato → Leyenda) y 12 logros desbloqueables
- **Offline** — Funciona sin conexión gracias al Service Worker
- **Instalable** — PWA completa con manifest para instalar en el celular
- **Tema oscuro/claro** — Configurable en ajustes

## 🛠️ Tech Stack

- HTML5 + CSS3 + JavaScript puro (sin frameworks)
- Service Worker para cache offline
- Web App Manifest para instalación
- LocalStorage para persistencia
- Web Audio API para frecuencias binaurales
- CSS Animations para transiciones de cartas
- Mobile-first responsive design

## 🚀 Uso Local

1. Clona o descarga esta carpeta
2. Sirve con cualquier servidor HTTP:
   ```bash
   # Con Python
   python3 -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```
3. Abre `http://localhost:8000` en tu navegador
4. En Chrome mobile, toca "Agregar a pantalla de inicio" para instalar la PWA

## 📦 Compilar a APK para Google Play Store

### Opción 1: PWABuilder (Más fácil, recomendado)

1. Publica la PWA en un servidor HTTPS (GitHub Pages, Vercel, Netlify)
2. Ve a [pwabuilder.com](https://pwabuilder.com)
3. Ingresa la URL de tu PWA
4. Selecciona "Android" como plataforma
5. Descarga el APK/AAB generado
6. Súbelo a Google Play Console

### Opción 2: Bubblewrap (CLI para mayor control)

```bash
npm install -g @nicolo-ribaudo/nicolo-ribaudo-nicolo-ribaudo-nicolo-ribaudo-nicolo
bubblewrap init --manifest https://TU-DOMINIO/manifest.json
bubblewrap build
```

> **Nota:** Verifica el nombre exacto del paquete npm en [npmjs.com](https://npmjs.com) buscando "bubblewrap".

### Opción 3: Capacitor (Control total, proyecto nativo)

```bash
mkdir escudo-native && cd escudo-native
npm init -y
npm install @capacitor/core @capacitor/cli
npx cap init ESCUDO com.psicofrecuencia.escudo --web-dir=../escudo-app
npx cap add android
npx cap sync
npx cap open android
# En Android Studio: Build > Generate Signed Bundle / APK
```

## 📋 Pasos para Play Store

1. **Publica la PWA** en un servidor HTTPS
2. **Genera el AAB/APK** con PWABuilder, Bubblewrap o Capacitor
3. **Crea cuenta de desarrollador** en [Google Play Console](https://play.google.com/console) ($25 USD una vez)
4. **Sube el AAB** con capturas de pantalla y descripción
5. **Espera revisión** (1-7 días hábiles)

## 📂 Estructura de Archivos

```
escudo-app/
├── index.html      — App shell con todas las pantallas
├── styles.css      — Estilos completos con animaciones
├── app.js          — Lógica del juego, datos de 120 cartas, audio
├── manifest.json   — PWA manifest para instalación
├── sw.js           — Service Worker para offline
├── icons/          — Iconos de la app (8 tamaños + screenshot)
└── README.md       — Este archivo
```

## 🎴 Cartas (120 total)

| Tipo | Cantidad | Tema |
|------|----------|------|
| 🛡️ Escudo | 30 | Autoestima |
| ⚔️ Espada | 30 | Asertividad |
| 🛑 Barrera | 30 | Anti-bullying |
| ✨ Poder | 20 | Comodines especiales |
| 🎴 Frecuencia | 10 | Psicología Frecuencial |

## 📝 Créditos

**ESCUDO — El Juego del Guerrero Interior**
© 2026 Moisés Beltrán | Psicología Frecuencial
[psicofrecuencia.com](https://psicofrecuencia.com)