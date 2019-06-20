import MUIDataTable from 'mui-datatables';
import styled from 'styled-components';

const severities = ['#40AC2B', '#7499FF', '#FFC859', '#FFA059', '#E97659', '#E45959'];

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: fixed;
  width: 100%;
`;

export const DataTable = styled(MUIDataTable)`
  border: 1px solid #ddd;
  margin: 0 30px 20px 10px;
`;

export const Priority = styled.span`
  align-items: center;
  background-color: ${props => severities[props.priority]};
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 100px;
`;

export const Wrapper = styled.div`
  background-color: #f0f1f1;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 50px;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
`;
