import ImageComponent from "@/components/images/image";
import styles from './style.module.css'
import { inter,suwannaphum } from '@/app/fonts'
export default function Home() {
  return (
    <main className={`${styles.container} ${suwannaphum.className} ${inter.className}`}>
      <section className={styles.flexContainer}>
      <div className="md:shrink-0  ">
        <ImageComponent />
      </div>
      <div className="p-8">
        <div className="uppercase text-sm font-semibold  text-indigo-500 tracking-wide">
        <h1 className="text-center mt-1 text-black hover:underline leading-tight mb-5 tracking-wide text-2xl">សួរស្ដី មករា</h1>
        <p className="mt-2 text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          esse optio odit blanditiis tempora inventore quam totam, temporibus et
          repudiandae, nihil praesentium, quibusdam in quis dolorem veniam?
          Quis, harum quae?
        </p>
        </div>
      </div>
      </section>
    </main>
  );
}
