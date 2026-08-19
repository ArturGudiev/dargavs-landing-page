import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto_1fr] w-full  pt-[60px] pb-[60px]">
        {/* Левая часть */}
        <div className="text-left pl-[100px]">
          <Image src="/logotype.png" alt="Logotype" width={130} height={48} priority />
        </div>

        {/* Центр (займет ровно столько, сколько нужно контенту) */}
        <div 
          className="pt-[57px] flex gap-4 text-[#3D6CB9]"
          style={{ letterSpacing: '1.5px' }}  
        >
          <div className={styles.navLink}>Главная</div>
          <div className={styles.navLink}>Меню</div>
          <div className={styles.navLink}>О нас</div>
          <div className={styles.navLink}>Отзывы</div>
          <div className={styles.navLink}>Контакты</div>
        </div>

        {/* Правая часть */}
        <div className="text-right pr-[100px] pt-[30px]">
          <div style={{ 
            width: '80px', 
            height: '80px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            boxShadow: '0px 2px 16px 0px rgba(168, 200, 254, 0.25)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            position: 'absolute',  
            right: '120px',          
            }}>
            <Image
              src="/heart.svg"
              className="w-[34px] h-[34px]"
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
          
          <div className="pt-[17px] relative h-[85px]">
            <div 
              style={{ 
                fontFamily: "Cormorant", 
                color: "#6B7FA7",
                position: 'absolute',
              }}
              className="font-bold text-[50px] leading-[100%] tracking-[0px]"
              >
                Кафе под открытым небом
              </div>
              <div 
                className="absolute pl-[70px] pt-[17px] font-['Antarctic'] text-[70px] font-normal text-[#FFD683] leading-[68px] tracking-[0.16em]"
              >dargavs cafe</div>
            </div>
         
          <div
            className="pt-[17px] text-[28px] ml-auto mr-[1rem] text-right font-['Cormorant'] italic text-[#8DB2FE] font-bold"
          >
            здесь время останавливается
          </div>

          <div
            style={{ textIndent: "40px" }}
            className="mt-[50px] text-[16px] font-medium leading-[1.2] text-[#6B7FA7] space-y-[20px]"
          >
            <p>
              Наслаждайтесь вкусной едой и красивым видом в нашем кафе с видом на горы.
              Окунитесь в мир вкуса и красоты!
            </p>
            <p>
              Наше кафе в горах Северной Осетии — это не просто еда,
              это целое приключение. Мы готовим из местных продуктов,
              чтобы каждый кусочек был свежим и незабываемым.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <button className="cursor-pointer bg-[#8DB2FE] text-white px-[20px] py-[10px] rounded-[40px] transition-transform duration-250 ease-in-out hover:brightness-105 active:scale-95 active:brightness-95">
              Позвонить
            </button>
          </div>
        </div>
        <div className="w-[818px]">
          <ImageCarousel />
        </div>
      </div>

      <div className="pt-[86px] pl-[100px] text-[#6B7FA7] text-[32px]">
        Меню
      </div>

      <div className="pt-[1.5rem] pl-[100px] pl-[25px] text-[#6B7FA7] text-[24px]">
        Наши популярные блюда
      </div>

      <div 
        id="popular-dishes" 
        style={{ display: "flex", gap: "2rem", flexWrap: "wrap"}}
        className="pt-[2rem] pl-[100px] pr-[100px] border"
      >
        <div className="w-[406px] h-[329px] rounded-[24px] border">
          
        </div>
        <div className="w-[406px] h-[329px] rounded-[24px] border"></div>
        <div className="w-[406px] h-[329px] rounded-[24px] border"></div>
        <div className="w-[406px] h-[329px] rounded-[24px] border"></div>
        <div className="w-[406px] h-[329px] rounded-[24px] border"></div>
      </div>

      <div className="pt-[42px] pl-[100px] pr-[100px] border flex justify-center">
        <button className="
          cursor-pointer bg-[#8DB2FE] 
          text-[18px] font-bold
          h-[59px] text-white pl-[45px] pr-[45px] rounded-[40px] transition-transform duration-250 ease-in-out hover:brightness-105 active:scale-95 active:brightness-95">
          Посмотреть все
        </button>
      </div>
    </>
  );
}
