import './AppHeader.css';
import Button from './Button';

export default function AppHeader() {
    return (
        <header className="app-header">
            <div className="app-header-container">
                <h1 className="app-header-title">🎨 Kroma AI Palette</h1>
                <div><Button>Create project</Button>
                <Button variant='secondary'>Try again</Button></div>
                
               
            </div>
        </header>
    );
}