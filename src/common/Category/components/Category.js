import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import '../styles/_category.scss';

function Category(props) {
  const { menu } = props;
  const [opt, setOpt] = useState(menu[0]);

  const style = choose => cx('category__btn', {
    'category__btn--deactivated': opt !== choose,
    'category__btn--actived': opt === choose
  });

  function onClick(option) {
    return () => {
      setOpt(option);
    }
  }

  function option(item) {
    return (
      <div
        key={item}
        className={style(item)}
        onClick={onClick(item)}
      >
        <input key={item} type="radio" name="category" value="item" />
        {item}
      </div>
    );
  }

  useEffect(() => {
    props.selected(opt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opt])

  return (
    <section className="category">
      {menu.map(item => option(item))}
    </section>
  )
}

export default Category;

Category.prototype = {
  menu: PropTypes.array.isRequired,
  selected: PropTypes.func.isRequired
}
