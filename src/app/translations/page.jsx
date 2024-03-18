import quizzes from '@/quiz.json'
import { getBibleVerseByOsisRef } from '@/assets/utilities/bible_verses_functions'
export default function TranslationsMainPage() {
  return (
    <>
      <h1 className='text-3xl'>Translations Main Page</h1>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              quizzes.map((quiz, question_index) => {
                return (
                  <div className="bg-white rounded-lg shadow-lg p-6" key={`${question_index}-quizz`}>
                    <h2 className="text-2xl font-bold mb-2">{quiz.question}</h2>
                    <p className="text-gray-700 mb-4" dir='rtl'>{quiz.question_ar}</p>
                    {
                      quiz.answers.map((answer, answer_index) => {
                        return (
                          <div className="flex items space-x-6 " key={`${question_index}-${quiz.question}-${answer_index}}`}>
                            <p className="text-gray-700 mr-2">{answer.answer}</p>
                            <p className="text-gray-700 mr-2" dir='rtl'>{answer.answer_ar}</p>
                          </div>
                        )
                      }
                      )
                    }
                    {quiz.verses && quiz.verses.length > 0
                      &&
                      quiz.verses.map(
                        (verse, main_index) => {
                          return (
                            <p className="text-gray-700 mb-4 mt-3" dir='ltr' key={`Bible_verse_single_${main_index}`}>
                              {
                                // if getBibleVerseByOsisRef(verse) is an array map it else diplay as follows
                                Array.isArray(getBibleVerseByOsisRef(verse)) ? getBibleVerseByOsisRef(verse).map((verse, index) => {
                                  return (
                                    <p key={`Bible_verse_${index}`} dir='ltr'>
                                      {verse.fields.verseText}
                                    </p>
                                  )
                                }) :
                                  getBibleVerseByOsisRef(verse).fields.verseText}
                            </p>)
                        }
                      )
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </section >
    </>
  )
}