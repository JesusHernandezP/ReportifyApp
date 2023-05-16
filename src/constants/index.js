// Creamos un objeto con las keys del array que nos pasa el backend
export const themeTranslation ={
  'sports':'Deporte',
  'politics':'Política',
  'economy':'Economía',
  'education':'Educación',
  'society':'Sociedad',
  'technology':'Tecnología',
  'culture':'Cultura',
  'science':'Ciencia',
  'gaming':'Gaming',
  'medicine':'Medicina',
}

// Recuperamos el array del backend de themes, recogiendo las keys del objeto: themes=[sports,politics...]
export const themes = Object.keys(themeTranslation)