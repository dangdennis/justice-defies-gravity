import { AudioPlayer } from '@/components/AudioPlayer'
// import { PanelSubtext } from '@/components/PanelSubtext'
import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ maxWidth: 1250 }} className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24 md:gap-y-24">
      <div>
        {/* <PanelSubtext text="[Scene: An alleyway. The robber frog, wearing a black mask, is clinging to the wall, his suction-cup hands keeping him in place. He has a purse in one hand, while his eyes dart around cautiously. The goat detective, wearing a trench coat and hat, stands at the entrance of the alley, observing.]" /> */}
        <div className="flex justify-center">
          <AudioPlayer audioFilePath={"/panel1-subtext-narrator.mp3"} />
        </div>
        <div className="flex justify-center">
          <Image src="/panel1.png" width={1000} height={400} alt='Scene: An alleyway. The robber frog, wearing a black mask, is clinging to the wall, his suction-cup hands keeping him in place. He has a purse in one hand, while his eyes dart around cautiously. The goat detective, wearing a trench coat and hat, stands at the entrance of the alley, observing.' />
        </div>

        <div className='mt-4'>
          <SpeechText audioFilePath='/goat-1.mp3' text={"Goat Detective: (whispering) Aha! Found you, you slippery amphibian!"} />
        </div>
      </div>

      <div className="mt-12 md:mt-24">
        {/* <PanelSubtext text='[Scene: The goat detective approaches the wall where the frog is hiding. He reaches out his hoof and touches the wall.]' /> */}
        <div className="flex justify-center">
          <AudioPlayer audioFilePath={"/panel2-subtext-narrator.mp3"} />
        </div>
        <div className="flex justify-center">
          <Image src="/panel2.png" width={1000} height={400} alt='Scene: The goat detective approaches the wall where the frog is hiding. He reaches out his hoof and touches the wall.' />
        </div>
        <div className='mt-4'>
          <SpeechText audioFilePath='/goat-2.mp3' text="Goat Detective: (thinking) Hmmm...interesting. This wall has a slight incline... 92 degrees, to be precise." />

          <div className="mt-6">
            <SpeechText audioFilePath='/frog-2.mp3' text="Robber Frog: (smirking) You think you can catch me, detective?" />
          </div>
        </div>
      </div>

      <div>
        {/* <PanelSubtext text="[Scene: The goat detective confidently starts walking up the wall, defying gravity. The frog robber's eyes widen in fear.]" /> */}
        <div className="flex justify-center">
          <AudioPlayer audioFilePath={"/panel3-subtext-narrator.mp3"} />
        </div>
        <div className="flex justify-center">
          <Image src="/panel3.png" width={1000} height={400} alt="Scene: The goat detective confidently starts walking up the wall, defying gravity. The frog robber's eyes widen in fear." />
        </div>

        <div className="mt-4">
          <SpeechText audioFilePath='/goat-3.mp3' text="Goat Detective: (determined) Not at all, my slimy friend. Gravity might be against us, but justice knows no bounds!" />
          <div className='mt-6'>
            <SpeechText audioFilePath='/frog-3.mp3' text="Robber Frog: (exclaiming) Wait! How are you...? This isn't fair!" />
          </div>
        </div>
      </div>
      {/*
      <div>
        <PanelSubtext text="[End of comic strip.]" />
      </div> */}

      <h1 className='my-12 font-bold text-lg'>Justice Defies Gravity</h1>
    </main>
  )
}

function SpeechText(props: { text: string, audioFilePath: string }) {
  return (
    <div className="flex md:gap-x-2">
      <p>{props.text}</p>
      <AudioPlayer audioFilePath={props.audioFilePath} />
    </div>
  )
}
