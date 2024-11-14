import { useState } from 'react'
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'
import Sidebar from './components/Sidebar';
import PreviewPage from './components/PreviewPage';
import Footer from './components/Footer';


function App() {
  const [category, setCategory] = useState('technology');
  const [open, setOpen] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(null);
  console.log('selectedArticle:', selectedArticle);

  return (
    <>
      <Header setOpen={setOpen}/>
      <Sidebar onSelectCategory={setCategory} setOpenClose={setOpen} open={open}/>
      <div className='flex w-full h-auto my-24 px-10 gap-x-4'>
        <NewsFeed category={category} onArticleSelect={setSelectedArticle} selectedArticle={selectedArticle}/>
        {selectedArticle && <PreviewPage article={selectedArticle} closePreview={setSelectedArticle}/>}
      </div>
      <Footer />
    </>
  )
}

export default App
