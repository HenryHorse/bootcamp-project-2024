import { IComment } from '@/database/blogSchema'
{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
    return new Date(time).toDateString();
}

function Comment({ comment }: CommentProps) {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-teal-900">{comment.user}</h4>
                <span className="text-sm text-gray-500">{parseCommentTime(comment.time)}</span>
            </div>
            <p className="mt-4 text-gray-700">{comment.comment}</p>
        </div>
    );
}

export default Comment;