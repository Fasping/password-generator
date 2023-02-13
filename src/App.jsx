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

const ControlDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background: #33357e;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #684eff;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
          <ControlDiv>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                />
              </svg>
            </Button>
            <span>0</span>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </Button>
          </ControlDiv>
        </Fila>
      </form>
    </div>
  );
};

export default App;
