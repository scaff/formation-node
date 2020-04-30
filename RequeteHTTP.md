# Requête HTTP
## Récupérer un élément (ex: un article de blog)
`GET url/articles/:id`

## Récupérer plusieurs éléments (ex: une liste d'article)
`GET url/articles`

## Créer un élément (poster un article)
`POST url/articles` ici ce verbe HTTP (POST) attend un body

## Supprimer un élément
`DELETE url/articles/:id`

## Editer un élément
### Ecraser l'élément
`PUT url/articles/:id`

### Modifier que ce qui est donné
`PATCH url/articles/:id`