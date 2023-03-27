function App() {
  return (
    <div className='flex p-16'>
      {/* Card */}
      <div className='hover:scale-105 hover:shadow-md hover:shadow-neutral-500 transition cursor-pointer flex w-[700px] bg-stone-800 rounded-xl gap-4 h-96 overflow-hidden'>
        <img
          className='h-full'
          src='https://uploads.mangadex.org/covers/491c4755-09ae-4493-aa95-30e5036aac6c/fcc25e52-c7b7-414a-a054-074044c84893.jpg.512.jpg'
          alt='Cover'
        />
        <div className='flex flex-col relative p-8 group'>
          <div
            className='h-full'
            style={{ lineClamp: 10 }}>
            <h3 className='text-xl mb-4'>Sky Imperial Palace</h3>
            After the cataclysm, the aura recovered, monsters gone rampant and
            humans struggled to survive in the safe city. In this crisis, A
            genius scientist invented a game called “Sky Imperial Palace”. The
            game collects aura and converts it into energy. Since then, mankind
            has started the era of national games. The order is reorganized and
            the hierarchy is strict. Question arise, is “Sky Imperial Palace”
            really the salvation of mankind? Player Xiao Ce accidentally
            obtained the “Vermilion Bird” system, connecting the game and
            reality! From that point, the two worlds became vertical and
            horizontal.
          </div>
          <div className='absolute w-full inset-0 from-stone-800 to-neutral-200/0 via-stone-800 bg-gradient-to-t pt-[50%] px-8 pb-8 transition-transform duration-500 group-hover:translate-y-full'>
            <div className='flex gap-2 mb-2'>
              <div className='bg-gray-700 px-2 rounded-sm w-fit'>Action</div>
              <div className='bg-gray-700 px-2 rounded-sm w-fit'>Adventure</div>
              <div className='bg-gray-700 px-2 rounded-sm w-fit'>Dungeon</div>
              <div className='bg-gray-700 px-2 rounded-sm w-fit'>Arcade</div>
            </div>
            <p>Read about Kabuto's adventure</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
