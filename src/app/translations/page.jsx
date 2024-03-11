import quizzes from '@/quiz.json'
import bible_verses from '@/verses.json'
export default function TranslationsMainPage() {
  console.log(bible_verses[0])
  function getBibleVerseByOsisRef(ref) {
    console.log(ref)
    // if ref contais - then it is a range of verses so get all the verses in the range
    if (ref.includes('-')) {
      const range = ref.split('-');
      const start = range[0];
      const end = range[1];
      const start_index = bible_verses.findIndex(verse => verse.fields.osisRef === start);
      const end_index = bible_verses.findIndex(verse => verse.fields.osisRef === end);
      return bible_verses.slice(start_index, end_index + 1);
    }
    else {
      return bible_verses.find(verse => verse.fields.osisRef === ref);
    }
  }
  return (
    <>
      <h1 className='text-3xl'>Translations Main Page</h1>
      <section class="px-4 py-6">
        <div class="container-xl lg:container m-auto px-4 py-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              quizzes.map((quiz, index) => {
                return (
                  <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2 class="text-2xl font-bold mb-2">{quiz.question}</h2>
                    <p class="text-gray-700 mb-4" dir='rtl'>{quiz.question_ar}</p>
                    {
                      quiz.answers.map((answer, index) => {
                        return (
                          <div class="flex items space-x-6 " key={index}>
                            <p class="text-gray-700 mr-2">{answer.answer}</p>
                            <p class="text-gray-700 mr-2" dir='rtl'>{answer.answer_ar}</p>
                          </div>
                        )
                      }
                      )
                    }
                    {quiz.verses && quiz.verses.length > 0
                      &&
                      quiz.verses.map(
                        (verse, index) => {
                          return (
                            <p class="text-gray-700 mb-4" dir='rtl'>
                              {
                                // if getBibleVerseByOsisRef(verse) is an array map it else diplay as follows
                                Array.isArray(getBibleVerseByOsisRef(verse)) ? getBibleVerseByOsisRef(verse).map((verse, index) => {
                                  return (
                                    <p key={index} dir='rtl'>
                                      {verse.fields.richText}
                                    </p>
                                  )
                                }) :
                                  getBibleVerseByOsisRef(verse).fields.richText}
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