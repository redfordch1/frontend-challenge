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

<style jsx>{`
.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 5px solid red;

  max-width: 800px;
  
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
`}</style>

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
              <img src={ avatar } />
              <h2>Author: { author }</h2>
              <h3>Title: { title }</h3>
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




