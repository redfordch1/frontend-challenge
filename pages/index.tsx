import Head from 'next/head'
import Image from 'next/image'

const apiEndpoint = 'https://union-staging.barstoolsports.com/v2/stories/latest';

export async function getStaticProps() {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}


export default function Home({data}) {
  const results = data;
  console.log(results)
  return (
    <div className="max-w-xl mx-auto py-4">
      <Head>
        <title>Barstool Sports</title>
      </Head>

      <header className="px-4 flex justify-center">
        <Image src="/logo.png" alt="Barstool Sports" width="200" height="64" />
      </header>
      <main>
        <ul className="grid">
        {results.map(result => {
          const author = result.author.name;
          const avatar = result.author.avatar;
          const { id, title } = result;
          return (
            <li className="card" key={ id }>
              <img className="card_img" src={ avatar } />
              <div className="card_letters">
                  <h3 className="card_title">{ title }</h3>
                  <h2 className="card_h2">Author: { author }</h2>
              </div>
            </li>
          )
        })}
        </ul>
      </main>

      <footer className="flex justify-center items-center w-full py-5 mt-10 border-t border-[#eaeaea]">
        &copy; Barstool Sports
      </footer>
    </div>

    
  )
}




