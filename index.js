const getCats = async () => {
    try {
      const fetch = (await import('node-fetch')).default; // Carga dinámica del módulo
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
      const cats = await response.json();
      console.log("Gatos obtenidos:", cats);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  
  getCats();