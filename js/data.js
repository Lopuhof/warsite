let cardsData = [ 
   {
      id: 1,
      title: 'Капитанская дочка', 
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич' 
      },
      description: 'История про честь и достоинство даже перед лицом смерти. Не зря эта история пользовалась популярностью у солдат во время Великой Отечественной войны...',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944', 
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 2, 
      title: 'Хаджи-Мурат',
      author: {
         surname: 'Толстой',
         name: 'Лев',
         fatherName: 'Николаевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
        return `src="../image/books/${this.id}.jpg"`
     },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 3, 
      title: 'Беглец',
      author: {
         surname: 'Чехов',
         name: 'Антон',
         fatherName: 'Павлович',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944', 
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 4, 
      title: '',
      author: {
         surname: 'Тютчев',
         name: 'Фёдор',
         fatherName: 'Иванович',
      },
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 5, 
      title: 'Детство',
      author: {
         surname: 'Горький',
         name: 'Максим',
         fatherName: '',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 6, 
      title: 'Борьба русского народа с немецкими интервентами в XII-XV вв.',
      author: {
         surname: 'Тихомиров',
         name: 'Михаил',
         fatherName: 'Николаевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
         return (`
         <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
             <div class="modalsWindows-modal-content modal-content_${this.id}">
                 <div class="modalsWindows-modal-content-image">
                     <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                 </div>
                 <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
             </div>
         </div> 
         `)},
      get button() {
      return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 7, 
      title: 'Хаджи-Мурат',
      author: {
         surname: 'Толстой',
         name: 'Лев',
         fatherName: 'Николаевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 8, 
      title: 'Беглец',
      author: {
         surname: 'Чехов',
         name: 'Антон',
         fatherName: 'Павлович',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 9, 
      title: '',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 10, 
      title: 'Детство',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      author: 'Максим Горький',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 11, 
      title: 'Борьба русского народа с немецкими интервентами в XII-XV вв.',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 12, 
      title: 'Капитанская дочка',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 13, 
      title: 'Хаджи-Мурат',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 14, 
      title: 'Беглец',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 15, 
      title: '',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      author: 'Тютчев',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 16, 
      title: 'Детство',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 17, 
      title: 'Борьба русского народа с немецкими интервентами в XII-XV вв.',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 18, 
      title: 'Капитанская дочка',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 19, 
      title: 'Хаджи-Мурат',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 20, 
      title: 'Беглец',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 21, 
      title: '',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 22, 
      title: 'Детство',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      },
   },
   {
      id: 23, 
      title: 'Борьба русского народа с немецкими интервентами в XII-XV вв.',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 24, 
      title: 'Капитанская дочка',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 25, 
      title: 'Хаджи-Мурат',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 26, 
      title: 'Беглец',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 27, 
      title: '',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 28, 
      title: 'Детство',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 29, 
      title: 'Борьба русского народа с немецкими интервентами в XII-XV вв.',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 30, 
      title: 'Капитанская дочка',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 31, 
      title: 'Хаджи-Мурат',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 32, 
      title: 'Беглец',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 33, 
      title: '',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
   {
      id: 34, 
      title: '',
      author: {
         surname: 'Пушкин',
         name: 'Александр',
         fatherName: 'Сергеевич',
      }, 
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur inventore, enim accusantium a reprehenderit veritatis sint numquam necessitatibus expedita debitis. Beatae laboriosam officiis ipsum, aliquam neque delectus quas itaque.',
      get createString() {
         return `src="../image/books/${this.id}.jpg"`
      },
      year: '1944',
      get modalWindow() {
            return (`
            <div class="modalsWindows-modal modalsWindows-modal_${this.id}">
                <div class="modalsWindows-modal-content modal-content_${this.id}">
                    <div class="modalsWindows-modal-content-image">
                        <img class="big-image" src='../image/books/${this.id}.jpg' alt="img_${this.id}">
                    </div>
                    <div class="modalsWindows-modal-content-close"><i class="fa-solid fa-circle-xmark xmark_modals xmark_${this.id}"></i></div>
                </div>
            </div> 
            `)},
      get button() {
        return `<button class="scale" id="scale_${this.id}">Увеличить</button>`
      }, 
   },
];