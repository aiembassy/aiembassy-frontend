export const filtersHeader = [
    { label: 'all', name: 'Wszystkie', isChecked: true },
    { label: 'service', name: 'Usługi doradcze', isChecked: false },
    { label: 'training', name: 'Szkolenia', isChecked: false },
    { label: 'conference', name: 'Konferencje', isChecked: false },
    { label: 'workshop', name: 'Warsztaty', isChecked: false },
];

export const filtersList = [
    {
        id: '1',
        filter: ['training'],
        category: ['Szkolenia'],
        imageLink: '/images/hero_image_1.png',
        title: 'Tytuł projektu 1',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla.',
        date: 'Styczeń 2020',
        link: '/projects/project-1',
    },
    {
        id: '2',
        filter: ['service', 'training'],
        category: ['Usługi doradcze', 'Szkolenia'],
        imageLink: '/images/hero_image_2.png',
        title: 'Tytuł projektu 2',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla.',
        date: 'Luty 2020',
        link: '/projects/project-2',
    },
    {
        id: '3',
        filter: ['workshop', 'conference'],
        category: ['Warsztaty', 'Konferencje'],
        imageLink: '/images/hero_image_3.png',
        title: 'Tytuł projektu 3',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla.',
        date: 'Marzec 2020',
        link: '/projects/project-3',
    },
    {
        id: '4',
        filter: ['training'],
        category: ['Szkolenia'],
        imageLink: '/images/hero_image_1.png',
        title: 'Tytuł projektu 4',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla.',
        date: 'Styczeń 2020',
        link: '/projects/project-4',
    },
    {
        id: '5',
        filter: ['training'],
        category: ['Szkolenia'],
        imageLink: '/images/hero_image_2.png',
        title: 'Tytuł projektu 5',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla.',
        date: 'Luty 2020',
        link: '/projects/project-5',
    },
    {
        id: '6',
        filter: ['workshop'],
        category: ['Warsztaty'],
        imageLink: '/images/hero_image_3.png',
        title: 'Tytuł projektu 6',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla. Ac tincidunt ut dictumst urna dictum nulla.',
        date: 'Marzec 2020',
        link: '/projects/project-6',
    },
];
