import { Link } from 'react-router-dom';

export default function Footer() {
  const outfitImgUrl = 'https://i.ibb.co/nzyY8JJ/160711.png';
  const pecasImgUrl = 'https://i.ibb.co/473Cd6n/Clothes-icon-by-rudezstudio-4-580x386-removebg-preview-1.png';

  return (
    <div className="bg-slate-100 fixed bottom-0 w-full">
      <div className="flex justify-center items-center max-w-6xl mx-auto py-2 gap-6">
        <Link to="/Looks" className="flex flex-col items-center">
          <img src={outfitImgUrl} alt="Outfit" className="h-8 w-8 object-cover" />
          <span className="text-xs">Outfits</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center">
          <img src={pecasImgUrl} alt="Pecas" className="h-8 w-8 object-cover" />
          <span className="text-xs">Roupas</span>
        </Link>
      </div>
    </div>
  );
}
