import { render, screen } from "@testing-library/react"

describe('Pruebas en FirstApp', () => {
  const title = "Hola, Soy Goku";
  const subtitle = "Soy un subtitulo";

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render( <FirstApp title={ title } />);
    expect( container ).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola soy Goku"', () => {
    render( <FirstApp title={ title } /> );
    expect( screen.getByText(title) ).toBeTruthy();
    //screen.debug();

  })

  test('Debe de mostrar el titulo en un h1', () => {
    render( <FirstApp title={ title } /> );
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
  });

  test('Debe de ostrar el subtitulo enviado por props', () => {
    render( <FirstApp title={ title } subtitle={ subtitle } /> );

    expect( screen.getAllByText(subtitle).length ).toBe(2);
  })
});