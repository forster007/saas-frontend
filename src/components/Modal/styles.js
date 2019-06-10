import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Content = styled.div`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 2 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: ${props => (props.size === 'big' ? 600 : 400)}px;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  form {
    align-items: stretch;
    display: flex;
    flex-direction: column;

    > span {
      color: #b9bbbe;
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      margin-top: 15px;
    }

    > input {
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: rgba(0, 0, 0, 0.2);
      color: #f6f6f6;
      font-size: 16px;
      height: 40px;
      margin-top: 8px;
      padding: 10px;
      transition: border 0.15s ease;

      &focus: {
        border-color: #7289da;
      }
    }

    > button {
      margin: 20px 0 0;
    }
  }
`;
