import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClientProvider} from "react-query";
import {queryClient} from "./store/queryClient.ts";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </QueryClientProvider>
)
