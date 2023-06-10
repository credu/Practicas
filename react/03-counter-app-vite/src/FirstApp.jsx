import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle = "Soy un subtitulo" }) => {

  // if (!title) {
  //   throw new Error("El title no existe");
  // }

  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <p>{ subtitle }</p>
      <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
  //title: "Titulo",
  subtitle: "Soy un clasico"
}