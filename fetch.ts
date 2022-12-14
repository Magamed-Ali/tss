enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted',
}


async function getFaqs(reg: {
    topicId: number;
    status: QuestionStatus
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
    

} []> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(reg)
    });
    const data = await res.json();
    return data;
}