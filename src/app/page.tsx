import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto_1fr] w-full  pt-[60px] pb-[60px]">
      {/* Левая часть */}
      <div className="text-left pl-[100px]">
        <Image src="/logotype.png" alt="Logotype" width={130} height={48} priority />
      </div>

      {/* Центр (займет ровно столько, сколько нужно контенту) */}
      <div className="pt-[57px] flex gap-4 text-[#3D6CB9]">
        <div>Главная</div>
        <div>Меню</div>
        <div>О нас</div>
        <div>Отзывы</div>
        <div>Контакты</div>
      </div>

      {/* Правая часть */}
      <div className="text-right pr-[100px] pt-[30px]">
        <div style={{ width: '80px', height: '80px', borderColor: 'red', borderWidth: '1px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
          position: 'absolute',  
          right: '120px',
          
          }}>
          <Image
            src="/heart.svg"
            className="w-[34px] h-[34px] border border-red-500 "
              alt="like" 
              width={40} 
              height={34} 
              priority 
            />
        </div>

        </div>
      </div>

      <div className="border flex h-[700px] pl-[100px] pr-[100px] justify-between">
        <div className="border max-w-[556px]">
          <div 
           style={{ fontFamily: "Cormorant", color: "#8DB2FE" }}
            className="pt-[115px] font-bold italic text-[28px] leading-[100%] tracking-[0px]"
          >Добро пожаловать в</div>
          <div style={{ fontFamily: "Cormorant", color: "#6B7FA7" }}
            className="pt-[17px] font-bold text-[50px] leading-[100%] tracking-[0px]"
            >Кафе под открытым небом</div>
          <div style={{ fontFamily: "Antarctic", color: "#FFD683" }}
            className="pt-[17px] text-[70px] font-normal leading-[68px] tracking-[0.16em]"
          >dargavs cafe</div>
          <div>здесь время останавливается</div>

          <div>
          Наслаждайтесь вкусной едой и красивым видом в нашем кафе с видом на горы. 
          Окунитесь в мир вкуса и красоты! 
          Наше кафе в горах Северной Осетии — это не просто еда,              
          это целое приключение. Мы готовим из местных продуктов,                            
          чтобы каждый кусочек был свежим и незабываемым.
          </div>
          <button>Позвонить</button>
        </div>
        <div className="border w-[818px]">Image gallery carusel</div>
      </div>
    </>
  );
}
