import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>04/10/2021</td>
          </tr>
          <tr>
            <td>Dogão</td>
            <td className="withdraw">- R$29</td>
            <td>Comida</td>
            <td>01/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
