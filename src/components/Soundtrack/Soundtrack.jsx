import React, { useState, useRef, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Soundtrack.css';

// Componente principal de Soundtrack
const Soundtrack = () => {
  console.log('Componente Soundtrack renderizado');
  const playerRef = useRef(null);
  const progressBarRef = useRef(null);
  const volumeBarRef = useRef(null);
  const youtubePlayerRef = useRef(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const tracks = [
    {
      id: 1,
      title: "Circles",
      artist: "Post Malone",
      coverImage: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
      youtubeId: "4EQkYVtE-28",
      description: "Tema principal que acompaña el comienzo de la historia, estableciendo el tono emocional de la novela.",
      chapter: "Capítulo 1",
      color: "#1a1a8f"
    },
    {
      id: 2,
      title: "Recuerdos Perdidos",
      artist: "Ludovico Einaudi",
      coverImage: "https://placehold.co/400x400/0d0d2b/ffffff?text=Recuerdos+Perdidos",
      youtubeId: "caxWMI7WzXs", // Experience by Ludovico Einaudi
      description: "Melodía melancólica que representa los flashbacks del protagonista y su lucha con el pasado.",
      chapter: "Capítulo 3",
      color: "#9900cc"
    },
    {
      id: 3,
      title: "Confrontación",
      artist: "Hans Zimmer",
      coverImage: "https://placehold.co/400x400/0d0d2b/ffffff?text=Confrontación",
      youtubeId: "RxabLA7UQ9k", // Time by Hans Zimmer
      description: "Pieza intensa que acompaña el clímax de la historia cuando los personajes enfrentan sus traumas.",
      chapter: "Capítulo 7",
      color: "#ff1a3e"
    },
    {
      id: 4,
      title: "Resolución",
      artist: "Max Richter",
      coverImage: "https://placehold.co/400x400/0d0d2b/ffffff?text=Resolución",
      youtubeId: "rVN1B-tUpgs", // On the Nature of Daylight by Max Richter
      description: "Tema que cierra la narrativa, ofreciendo un sentido de cierre y esperanza después del conflicto.",
      chapter: "Capítulo 10",
      color: "#ff9900"
    }
  ];

  const currentTrack = tracks[currentTrackIndex];

  // Manejador de errores del reproductor
  const onPlayerError = (event) => {
    console.error('Error en el reproductor de YouTube:', event.data);
    setError(true);
    setIsPlaying(false);
    // Intentar cargar el siguiente track si hay un error
    setTimeout(() => {
      nextTrack();
      setError(false);
    }, 3000);
  };

  // Función para inicializar el reproductor de YouTube
  const onPlayerReady = (event) => {
    setPlayerReady(true);
    setLoading(false);
    setDuration(event.target.getDuration());
    event.target.setVolume(volume * 100);
    
    // Usar requestAnimationFrame para actualización más eficiente
    const updateProgress = () => {
      if (youtubePlayerRef.current && typeof youtubePlayerRef.current.getCurrentTime === 'function' && isPlaying) {
        setCurrentTime(youtubePlayerRef.current.getCurrentTime());
        playerRef.current = requestAnimationFrame(updateProgress);
      }
    };
    
    playerRef.current = requestAnimationFrame(updateProgress);
  };

  const onPlayerStateChange = (event) => {
    // Estado 1 = reproduciendo, 2 = pausado, 0 = terminado
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      setLoading(false);
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setIsPlaying(false);
    } else if (event.data === window.YT.PlayerState.ENDED) {
      if (repeat) {
        // Si está en modo repetir, reproducir la misma canción
        if (youtubePlayerRef.current) {
          youtubePlayerRef.current.seekTo(0);
          youtubePlayerRef.current.playVideo();
        }
      } else {
        // Si no está en modo repetir, pasar a la siguiente canción
        nextTrack();
      }
    } else if (event.data === window.YT.PlayerState.BUFFERING) {
      setLoading(true);
    }
  };

  // Memoizar la función de inicialización para evitar recreaciones innecesarias
  const initializeYouTubePlayer = useCallback(() => {
    console.log('Intentando inicializar el reproductor de YouTube');
    
    if (!window.YT || !window.YT.Player) {
      console.error('La API de YouTube no está disponible');
      return;
    }
    
    try {
      // Limpiar el reproductor anterior si existe
      if (youtubePlayerRef.current) {
        try {
          youtubePlayerRef.current.destroy();
        } catch (e) {
          console.log('No se pudo destruir el reproductor anterior');
        }
        youtubePlayerRef.current = null;
      }
      
      // Asegurarse de que el contenedor existe
      const playerContainer = document.getElementById('youtube-player');
      if (!playerContainer) {
        console.error('El contenedor del reproductor no existe');
        // Crear el contenedor si no existe
        const newContainer = document.createElement('div');
        newContainer.id = 'youtube-player';
        newContainer.style.display = 'none';
        newContainer.style.width = '200px';
        newContainer.style.height = '200px';
        newContainer.style.position = 'absolute';
        newContainer.style.top = '-9999px';
        newContainer.style.left = '-9999px';
        document.body.appendChild(newContainer);
        console.log('Contenedor del reproductor creado dinámicamente');
      }
      
      console.log('Creando nuevo reproductor de YouTube con ID:', currentTrack.youtubeId);
      setLoading(true);
      setError(false);
      
      // Crear el nuevo reproductor
      youtubePlayerRef.current = new window.YT.Player('youtube-player', {
        width: '200',
        height: '200',
        videoId: currentTrack.youtubeId,
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'rel': 0,
          'fs': 0,
          'showinfo': 0,
          'enablejsapi': 1,
          'origin': window.location.origin
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
          'onError': onPlayerError
        }
      });
      
      console.log('Reproductor inicializado correctamente');
    } catch (error) {
      console.error('Error al inicializar el reproductor de YouTube:', error);
      setError(true);
      setLoading(false);
    }
  }, [currentTrack.youtubeId, onPlayerError, onPlayerReady, onPlayerStateChange]);  // Incluir todas las dependencias necesarias

  // Cargar la API de YouTube IFrame
  useEffect(() => {
    // Variable para seguimiento de montaje del componente
    let isMounted = true;
    
    const loadYouTubeAPI = () => {
      console.log('Intentando cargar la API de YouTube');
      
      // Verificar si ya existe un elemento script para la API
      const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      
      if (!window.YT || !window.YT.Player) {
        try {
          // Guardar cualquier callback existente para no sobrescribirlo
          const originalCallback = window.onYouTubeIframeAPIReady;
          
          window.onYouTubeIframeAPIReady = () => {
            console.log('YouTube API está lista');
            // Llamar al callback original si existe
            if (originalCallback) originalCallback();
            // Solo inicializar si el componente sigue montado
            if (isMounted) {
              console.log('Inicializando reproductor después de cargar API');
              setTimeout(initializeYouTubePlayer, 100);
            }
          };
          
          // Solo crear el script si no existe ya
          if (!existingScript) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            console.log('Script de API de YouTube insertado en el DOM');
          } else {
            console.log('Script de API de YouTube ya existe en el DOM');
            // Si el script ya existe pero la API no está lista, podría ser que
            // el callback no se haya configurado correctamente
            if (!window.YT || !window.YT.Player) {
              // Esperar un poco más y volver a intentar
              setTimeout(initializeYouTubePlayer, 1000);
            }
          }
        } catch (error) {
          console.error('Error al cargar la API de YouTube:', error);
          if (isMounted) setError(true);
        }
      } else {
        // La API ya está cargada, inicializar directamente
        console.log('API de YouTube ya está cargada, inicializando reproductor');
        setTimeout(initializeYouTubePlayer, 100);
      }
    };
    
    // Cargar la API con un pequeño retraso para asegurar que el DOM esté listo
    const timeoutId = setTimeout(loadYouTubeAPI, 300);
    
    return () => {
      // Marcar el componente como desmontado
      isMounted = false;
      clearTimeout(timeoutId);
      
      // Limpiar el intervalo o animación al desmontar
      if (playerRef.current) {
        if (typeof playerRef.current === 'number') {
          cancelAnimationFrame(playerRef.current);
        } else {
          clearInterval(playerRef.current);
        }
      }
      
      // Destruir el reproductor de YouTube si existe
      if (youtubePlayerRef.current && typeof youtubePlayerRef.current.destroy === 'function') {
        try {
          youtubePlayerRef.current.destroy();
          console.log('Reproductor de YouTube destruido');
        } catch (e) {
          console.error('Error al destruir el reproductor:', e);
        }
      }
    };
  }, [initializeYouTubePlayer]);
  
  // Inicializar o cambiar el reproductor cuando cambia la canción
  useEffect(() => {
    if (window.YT && window.YT.Player && showPlayer && currentTrack.youtubeId) {
      setLoading(true);
      if (youtubePlayerRef.current) {
        youtubePlayerRef.current.loadVideoById(currentTrack.youtubeId);
        if (isPlaying) {
          youtubePlayerRef.current.playVideo();
        } else {
          youtubePlayerRef.current.pauseVideo();
        }
      } else {
        initializeYouTubePlayer();
      }
    }
  }, [currentTrackIndex, showPlayer, initializeYouTubePlayer]);

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '0:00';
  };

  const togglePlay = () => {
    if (youtubePlayerRef.current && playerReady) {
      if (isPlaying) {
        youtubePlayerRef.current.pauseVideo();
      } else {
        youtubePlayerRef.current.playVideo();
      }
    }
  };

  const setProgress = (e) => {
    if (youtubePlayerRef.current && playerReady) {
      const width = progressBarRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const duration = youtubePlayerRef.current.getDuration();
      const newTime = (clickX / width) * duration;
      youtubePlayerRef.current.seekTo(newTime, true);
    }
  };

  const setVolumeLevel = (e) => {
    if (youtubePlayerRef.current && playerReady) {
      const width = volumeBarRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const newVolume = clickX / width;
      setVolume(newVolume);
      youtubePlayerRef.current.setVolume(newVolume * 100);
    }
  };

  const toggleShuffle = () => {
    setShuffle(prev => !prev);
  };

  const toggleRepeat = () => {
    setRepeat(prev => !prev);
  };

  const previousTrack = () => {
    if (shuffle) {
      // Elegir una canción aleatoria que no sea la actual
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * tracks.length);
      } while (randomIndex === currentTrackIndex && tracks.length > 1);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prevIndex) => 
        prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
      );
    }
    setIsPlaying(false);
    setLoading(true);
  };

  const nextTrack = () => {
    if (shuffle) {
      // Elegir una canción aleatoria que no sea la actual
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * tracks.length);
      } while (randomIndex === currentTrackIndex && tracks.length > 1);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prevIndex) => 
        prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
      );
    }
    setIsPlaying(false);
    setLoading(true);
  };

  const openPlayer = () => {
    setShowPlayer(true);
    setError(false);
  };

  const closePlayer = () => {
    if (youtubePlayerRef.current && playerReady) {
      youtubePlayerRef.current.pauseVideo();
    }
    setIsPlaying(false);
    setShowPlayer(false);
  };

  return (
    <div className="soundtrack-container">
      {/* Vista principal de la lista de canciones */}
      <div className={`container py-5 ${showPlayer ? 'd-none' : ''}`}>
        <h2 className="section-title text-center mb-4">Soundtrack</h2>
        <p className="section-description text-center mb-5">Explora la banda sonora que acompaña cada capítulo de Un Millón de Traumas.</p>
      
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="track-list">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className="track-item"
                  style={{
                    background: `linear-gradient(135deg, ${track.color}40, transparent)`,
                  }}
                  onClick={() => {
                    setCurrentTrackIndex(index);
                    openPlayer();
                  }}
                >
                  <div className="track-image">
                    <img src={track.coverImage} alt={track.title} />
                  </div>
                  <div className="track-info">
                    <h5>{track.title}</h5>
                    <p>{track.artist}</p>
                    <small>{track.chapter}</small>
                  </div>
                  <div className="track-play">
                    <button className="btn-play">
                      <i className="bi bi-play-fill"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="mb-4">Sobre la Banda Sonora</h3>
            <p>
              La música juega un papel fundamental en la narrativa de "Un Millón de Traumas", acompañando momentos clave y reforzando las emociones de los personajes.
            </p>
            <p>
              La banda sonora de "Un Millón de Traumas" fue cuidadosamente seleccionada para reflejar la complejidad emocional de la historia. Cada pieza musical corresponde a momentos clave en la narrativa, intensificando la experiencia del lector y creando una conexión más profunda con los personajes y sus vivencias.
            </p>
            <p>
              Las composiciones abarcan desde melodías introspectivas que acompañan los momentos de reflexión del protagonista, hasta piezas más intensas que subrayan los conflictos y revelaciones a lo largo de la novela.
            </p>
          </div>
        </div>
      </div>

      {/* Modal del reproductor de música */}
      <div
        className={`music-player-modal ${showPlayer ? 'show' : ''}`}
        style={{
          background: showPlayer
            ? `linear-gradient(135deg, ${currentTrack.color || '#1a1a8f'}, var(--color-background))`
            : 'initial',
        }}
      >
        <div className="player-container">
          <div className="player-header">
            <div className="device-name">
              <i className="bi bi-music-note-beamed me-2"></i>
              Un Millón de Traumas - Soundtrack
            </div>
            <button className="btn-close" onClick={closePlayer}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <div className="album-cover">
            {loading && <div className="loading-overlay">
              <div className="spinner"></div>
            </div>}
            {error && <div className="error-overlay">
              <i className="bi bi-exclamation-triangle"></i>
              <p>Error al cargar el audio</p>
            </div>}
            <img src={currentTrack.coverImage} alt={currentTrack.title} />
          </div>

          <div className="track-info">
            <h3>{currentTrack.title}</h3>
            <p>{currentTrack.artist}</p>
            <small className="description">{currentTrack.description}</small>
          </div>

          <div className="progress-container">
            <div className="time-info">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div
              className="progress-bar"
              ref={progressBarRef}
              onClick={setProgress}
            >
              <div
                className="progress"
                style={{
                  width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="controls">
            <button 
              onClick={toggleShuffle} 
              title="Aleatorio"
              className={shuffle ? 'active' : ''}
            >
              <i className="bi bi-shuffle"></i>
            </button>
            <button onClick={previousTrack} title="Anterior">
              <i className="bi bi-skip-backward-fill"></i>
            </button>
            <button
              className="btn-play-pause"
              onClick={togglePlay}
              title={isPlaying ? "Pausar" : "Reproducir"}
              disabled={error}
            >
              {loading && !error ? (
                <div className="spinner-small"></div>
              ) : (
                <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
              )}
            </button>
            <button onClick={nextTrack} title="Siguiente">
              <i className="bi bi-skip-forward-fill"></i>
            </button>
            <button 
              onClick={toggleRepeat} 
              title="Repetir"
              className={repeat ? 'active' : ''}
            >
              <i className="bi bi-repeat"></i>
            </button>
          </div>

          <div className="volume-container">
            <i className="bi bi-volume-down"></i>
            <div
              className="volume-bar"
              ref={volumeBarRef}
              onClick={setVolumeLevel}
            >
              <div
                className="volume"
                style={{ width: `${volume * 100}%` }}
              ></div>
            </div>
            <i className="bi bi-volume-up"></i>
          </div>

          <div className="player-footer">
            <div className="device-info">
              <i className="bi bi-book me-2"></i>
              <span>{currentTrack.chapter}</span>
            </div>
          </div>
          
          {/* Contenedor del reproductor de YouTube (oculto) */}
          <div id="youtube-player" style={{ 
            display: 'none', 
            width: '200px', 
            height: '200px',
            position: 'absolute',
            top: '-9999px',
            left: '-9999px',
            pointerEvents: 'none'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Soundtrack;