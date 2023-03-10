import './App.css';
import { ReactMediaRecorder, useReactMediaRecorder } from 'react-media-recorder';

function App() {
  const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({video:true});
  
  return (
    <div>
    <p>{status}</p>
    <button onClick={startRecording}>Start Recording</button>
    <button onClick={stopRecording}>Stop Recording</button>
    <video src={mediaBlobUrl} autoPlay loop controls/>
    </div>
  );
}

export default App;
