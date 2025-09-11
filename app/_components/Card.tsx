import style from './Card.module.css';

export const Card = () => {
  return (
    <div className={style.card}>
        <p>Lesson 1</p>
        <p>React 3D Interactive Card</p>
        <p>このレッスンでは、Reactの関数コンポーネントを使ってカード構造を作ります。マウス移動のハンドリングやenter, leaveのイベントリスナーによる視覚効果の作成やインタラクションをコンポーネントに実装します。</p>
    </div>
  );
}
