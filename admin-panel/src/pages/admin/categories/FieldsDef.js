import i18n from '../../../i18n/i18n'
console.log(i18n);

export default (i18n) => {
  return [
    {
      name: "id",
      title: () => i18n.t("message.name"),
      width: '70px',
    },
    {
      name: 'name',
      title: "Название"
    },
    {
      name: "created_at",
      title: 'Создано' 
    },
    {
      name: 'actions',
      title: "Действия",
      width: '120px',
    },
  ]
}
