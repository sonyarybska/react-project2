export function createPages(pagesCount, perPage, currentPage, numberOfPages) {
    if (pagesCount > perPage) {
        if (currentPage > 10) {
            for (let i = currentPage-4; i <= currentPage + 16; i++) {
                numberOfPages.push(i)
                if (i === pagesCount) break
            }
        } else {
            for (let i = 1; i <= perPage; i++) {
                numberOfPages.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            numberOfPages.push(i)
        }
    }
}