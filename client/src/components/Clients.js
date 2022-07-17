import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from './Spinner';
import { GET_CLIENTS } from '../queries/clientQueries';


export default function Clients() {
  const { data, loading, error } = useQuery(GET_CLIENTS);

  if (error) {
    return <div>Something went wrong</div>
  }

  if (loading) return <Spinner />;

  if (!loading && !error) {
    return (
      <table className='table table-striped-columns mt-4'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => <ClientRow key={client.id} client={client} />)}
        </tbody>
      </table>
    )
  }
}