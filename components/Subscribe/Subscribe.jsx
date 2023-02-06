import React from 'react'

const Subscribe = () => {
  return (
      <section className='text-center py-5 text-white'>
          <h1 className='uppercase text-2rem'>subscribe</h1>
          <span className='uppercase tracking-4 text-darkText'>sign-up ot our newsletters</span>

          <form className='mt-1 flex flex-col items-center gap-1'>
              <input type="text" placeholder='Your email'
                  className='bg-artBg p-[0.8rem] w-[20rem] border-2 text-0.9rem
                border-darkText outline-none'/>
              <button className='border py-0.4rem px-2 hover:bg-slate-100/70 hover:text-black/60
              uppercase text-0.9rem tracking-wider
              '>submit</button>
          </form>
    </section>
  )
}

export default Subscribe