import "./App.css";
import styled from "styled-components";

const Titulo = styled.h1`
  width: 100%;
  margin-bottom: 80px;
  vertical-align: top;
`;

const Fila = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #684eff;
  color: #fff;
  display: inline-flex;
  align-items: center;
  height: 40px;
  vertical-align: top;
  font-size: 18px;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #866ffd;
  }
`;

const App = () => {
  return (
    <div className="contenedor">
      <Titulo>
        <h1>Generator Password</h1>
      </Titulo>

      <form>
        <Fila>
          <label>Number caracters:</label>
          <div>
            <Button>-</Button>
            <span>0</span>
            <Button>+</Button>
          </div>
        </Fila>
      </form>
    </div>
  );
};

export default App;
