// Replace list copied from https://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
const _escText = text => {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const _buildLink = ({id, text, children}, flat) => {
  let nestedList = ''

  if (children.length > 0 && flat) {
    nestedList = children.map(c => _buildLink(c, flat))
  } else if (children.length > 0) {
    nestedList = BuildList(children)
  }

  if (id && text && flat) {
    return `<li><a href="#${id}">${_escText(text)}</a></li>${(
      nestedList || []
    ).join('')}`
  } else if (id && text) {
    if (nestedList) {
      return `<li><span><svg height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
    								<path fill-rule="evenodd" d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z">
    								</path>
    							</svg></span><a href="#${id}">${_escText(text)}</a>${nestedList}</li>`

    }
    else {
      return `<li><a href="#${id}">${_escText(text)}</a>${nestedList}</li>`
    }
  } else {
    return nestedList
  }
}

const BuildList = (listItems, ul, flat) => {
  const listType = ul ? 'ul' : 'ol'
  const list = listItems
    .sort((a, b) => a.order - b.order)
    .map(li => _buildLink(li, flat))

  return list.length > 0 ? `<${listType}>${list.join('')}</${listType}>` : ''
}

module.exports = BuildList
