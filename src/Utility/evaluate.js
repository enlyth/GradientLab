const evaluate = (store, chroma) => {
  try {
    const result = eval('((chroma, store) => {' + store.outputCode + '})')(
      chroma,
      store
    ).toString()
    return result
  } catch (err) {
    return err.toString()
  }
}

export default evaluate
