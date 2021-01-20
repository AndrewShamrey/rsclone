  export const getDate = (data: string) => {
    const dayOptions = {
      year: '2-digit',
      month: '2-digit',
      day: 'numeric',   
    };

    const timeOptions = {   
      hour: '2-digit',
      minute: '2-digit',
    };

    const date: Date = new Date(data); 
    const localeDay: string = date.toLocaleString('ru-RU', dayOptions);
    const localeTime: string = date.toLocaleString('ru-RU', timeOptions);

    return {
      localeDay,
      localeTime
    }
  }