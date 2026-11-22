# Mi Bitácora 1 &bull; Prof. Félix Aliaga

Página web estática moderna, adaptativa y profesional desarrollada para el **Prof. Félix Aliaga** (@profealiaga). Funciona como bitácora pedagógica, vitrina de divulgación educativa y punto de enlace para proyectos de innovación escolar y contacto directo por WhatsApp.

---

## 🌟 Características Principales

1. **Sección de Entrada (Hero) de Alto Impacto:**
   - Presentación de la identidad docente y propósito de la bitácora educativa.
   - Tarjeta de perfil con avatar oficial del canal de YouTube, insignias de especialidad pedagógica y accesos rápidos.
   - Métricas y etiquetas de enfoque: Práctica Pedagógica, Canal Oficial y Gestión Escolar.

2. **Galería Interactiva del Canal de YouTube (@profealiaga):**
   - Integración de los videos reales publicados en el canal con miniaturas oficiales de alta definición.
   - Filtros por categorías: *Todos*, *Práctica & Asesoría*, *Aprendo en Casa / Sesiones*, y *Familia & Valores*.
   - **Reproductor Modal Lightbox**: Permite visualizar y reproducir los videos en una ventana modal interactiva sin salir de la página, además de enlace directo a YouTube.

3. **Sección de Proyectos de Gestión Escolar (En Desarrollo):**
   - Espacio dedicado a la futura plataforma web independiente de instrumentos de gestión escolar (PEI, PAT, PCI, RI, Rúbricas de Desempeño y Automatización de Registros).
   - Enlace y botón directo para solicitar información anticipada.

4. **Sección de Contacto Directo vía WhatsApp (+51 941410026):**
   - Número oficial visible y enlaces directos con texto predeterminado.
   - **Generador interactivo de mensajes de WhatsApp**: Permite al visitante ingresar su nombre, elegir el tema de consulta y redactar un detalle para abrir automáticamente el chat oficial.
   - **Botón flotante de WhatsApp**: Accesible permanentemente en la esquina inferior derecha con efecto animado de notificación.

---

## 📁 Estructura del Proyecto

```
Mi-bitacora-1/
├── index.html       # Estructura semántica HTML5, metadatos y accesibilidad
├── styles.css       # Estilos modernos, diseño responsivo y efectos visuales
├── script.js        # Lógica interactiva (filtro de videos, modal YouTube, generador WhatsApp)
└── README.md        # Documentación del proyecto
```

---

## 🚀 ¿Cómo visualizar la página web?

Al ser un sitio web estático (HTML, CSS y JavaScript puro):

1. **En tu computadora (Local):**
   - Haz doble clic sobre el archivo `index.html` para abrirlo directamente en tu navegador web preferido (Google Chrome, Edge, Firefox, Brave, Safari).
   - O puedes usar extensiones como *Live Server* en VS Code si deseas recarga automática.

2. **Publicación en Internet (Gratis y Permanente):**
   Puedes publicarla fácilmente en cualquiera de estos servicios:
   - **GitHub Pages**: Sube los archivos a un repositorio de GitHub y activa Pages en la configuración.
   - **Netlify**: Arrastra la carpeta `Mi-bitacora-1` a [netlify.com/drop](https://app.netlify.com/drop) y tendrás un enlace público inmediato.
   - **Vercel**: Conecta tu repositorio o usa el CLI para desplegar en segundos.

---

## 🛠️ Personalización futura

- **Para agregar más videos**: Edita `index.html` dentro del contenedor `#videoGrid`, duplicando uno de los bloques `<article class="video-card">` y actualizando el `data-video-id`, la imagen de miniatura y el título.
- **Para cambiar el número de WhatsApp**: Busca `51941410026` en `index.html` y en `script.js` y reemplázalo por el nuevo número si fuera necesario.
- **Para enlazar la nueva web de gestión escolar**: Cuando esté lista la web dedicada, actualiza los enlaces en la sección `#gestion-escolar`.
