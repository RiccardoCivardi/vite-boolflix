const getImagePath = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href
}

export {getImagePath};