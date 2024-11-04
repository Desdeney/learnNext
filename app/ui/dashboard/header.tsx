import { lusitana } from '../fonts';
import '@/app/ui/global.css';

export function Header({title, image}: {title: string, image: string}){

    return (
        <div id="heroImage" className="rounded-xl"          style={{
                backgroundImage: `url(/${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', // optional: passt das Bild an die Größe des div an
                backgroundPosition: 'center',
                height: 250+'px',
                width: 80+'vw' // optional: zentriert das Bild
            }}>
            <h1 style={{fontSize: 80+'px',
            fontWeight: 'bold',
            padding: 48+'px',
            color: 'white'}}>{title}</h1>
        </div>
    );
}