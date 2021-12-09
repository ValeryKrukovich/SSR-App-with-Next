/**
 * Return unique string
 *
 */
 export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

export const formatGenres = (values) =>
  values ? (values.length == 2 ? values.join(' & ') : values.join(', ')) : '';