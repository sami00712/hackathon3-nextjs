import Image from "next/image"

export default function InstagramFeed() {
  return (
    <div className="mon-h-screen">
      <p className="text-center">share your setup with</p>
      <h1 className="text-center font-bold text-2xl">#FurnoirFurniture</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2 items-center">
        <div>
        <div className="flex">
          <Image src={'/images/inst1.png'} alt="pic" width={100} height={100} className="bg-black ml-2 "/>
          <Image src={'/images/inst2.png'} alt="pic" width={400} height={100} className="bg-black ml-2 "/>
        </div>
        <div className="flex">
          <Image src={'/images/inst3.png'} alt="pic" width={100} height={100} className="bg-black mt-2 ml-2"/>
          <Image src={'/images/inst4.png'} alt="pic" width={300} height={100} className="bg-black mt-2 ml-2"/>
        </div>
      </div>
      <div>
      <Image src={'/images/inst5.png'} alt="pic" width={400} height={100} className="bg-black ml-2"/>
      </div>
      <div>
        <div className="flex">
          <Image src={'/images/inst6.png'} alt="pic" width={200} height={100} className="bg-black  "/>
          <Image src={'/images/inst7.png'} alt="pic" width={200} height={100} className="bg-black ml-2"/>
        </div>
        <div className="flex">
          <Image src={'/images/inst8.png'} alt="pic" width={200} height={100} className="bg-black mt-2 "/>
          <Image src={'/images/inst9.png'} alt="pic" width={100} height={100} className="bg-black mt-2 ml-2"/>
        </div>
      </div>
    </div></div>
  )
}

