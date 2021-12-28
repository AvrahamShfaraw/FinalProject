using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Linq;

namespace Application.Photos
{
    public class SetMain
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _conetext;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext conetext, IUserAccessor userAccessor)
            {
                this._userAccessor = userAccessor;
                this._conetext = _conetext;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _conetext.Users.Include(P => P.Photos)
                .FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                if (user == null) return null;

                var photo = user.Photos.FirstOrDefault(x => x.Id == request.Id);
                if (photo == null) return null;

                var currentMain = user.Photos.FirstOrDefault(x => x.IsMain);

                if (currentMain.IsMain != null) currentMain.IsMain = false;

                photo.IsMain = true;

                var success = await _conetext.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);


                return Result<Unit>.Failure("Problem setting main photo ");

            }
        }
    }
}