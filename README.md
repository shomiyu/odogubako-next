# お道具箱

[お道具箱](https://お道具箱.com/)

- Next.js
- [microCMS](https://app.microcms.io/)
- [vercel](https://vercel.com/dashboard)

## セットアップ

### 環境変数

.env.development.local

```
BASE_URI='https://xxxxxx.microcms.io/api/v1/'
API_KEY='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
```

```
$ yarn
$ yarn dev
```

## 新しいページの追加時

編集する箇所

```
/src/utils/HeadUtils.ts # head 関連
/src/utils/ConstantUtils.ts # メニュー関連
```
