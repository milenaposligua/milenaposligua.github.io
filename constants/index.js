export const navigationContent = (language) =>{
  const content = [
    {
      id: 0,
      title: language("nav_about"),
      url: ''
    },
  ]
  return {content}
}


export const formationContent = (language) =>{
  const content = [
    {
      title: language("cv_edu_title"),
      badge: language("cv_edu_badge"),
      formations: [
        {
          title: language("cv_edu_formation_title_1"),
          description: language("cv_edu_formation_desc_1"),
          time: "2016 - 2017",
        },
        {
          title: language("cv_edu_formation_title_2"),
          description: language("cv_edu_formation_desc_2"),
          time: "2018 -2019",
        },
        {
          title: language("cv_edu_formation_title_3"),
          description: language("cv_edu_formation_desc_3"),
          time: "2020-2021",
        },
        {
          title: language("cv_edu_formation_title_4"),
          description: language("cv_edu_formation_desc_4"),
          time: "2022-2024",
        },
      ]
    },
    {
      title: language("cv_work_title"),
      badge: language("cv_work_badge"),
      formations: [
        {
          title: language("cv_work_formation_title_1"),
          description: "",
          time: "2019 - 2020",
        },
        {
          title: language("cv_work_formation_title_2"),
          description: "",
          time: "2019 - 2020",
        },
        {
          title: language("cv_work_formation_title_3"),
          description: "",
          time: "2020 - 2020",
        },
        {
          title: language("cv_work_formation_title_4"),
          description: "",
          time: "2020 - 2020",
        },
        {
          title: language("cv_work_formation_title_5"),
          description: "",
          time: "2021 - 2022",
        },
        {
          title: language("cv_work_formation_title_6"),
          description: "",
          time: "2022 - 2023",
        },
        {
          title: language("cv_work_formation_title_7"),
          description: "",
          time: "2023 - 2024",
        }
      ]
    }
  ]

  return {content}
}
