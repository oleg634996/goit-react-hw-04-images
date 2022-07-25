import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <BallTriangle color="#00BFFF" height={80} width={80} />;
    </div>
  );
}
