/**
 * (1pt) - Crie uma interface GameBannerProps com os três atributos passados vindos da das props
*/
interface GameBannnerProps {
  imagem: string,
  titulo: string,
  contador: number
}

/* (2pt) - Use a interface como o tipo das props do componente e substitua os 
 *          atributos estáticos das imagem (src), titulo e contador de anuncios pelas respectivas props
 */

export function GameBanner(props: GameBannnerProps) {
  return (<><a href="" className="relative rounded-lg overflow-hidden">
  <img src={props.imagem} alt="" />
  
  <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
  <strong className="font-bold text-white block">{props.titulo}</strong>
  <span className="text-zinc-300 text-sm block">{props.contador}</span>
  </div>
  </a></>);
  }
export default GameBanner;