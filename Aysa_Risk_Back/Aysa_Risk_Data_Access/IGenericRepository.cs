using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Aysa_Risk_Data_Access.Entities;

namespace Aysa_Risk_Data_Access
{
    public interface IGenericRepository<TEntity, in TKey> : IDisposable where TEntity : Entity<TKey>
    {
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<TEntity> GetByIdAsync(TKey id);
        void Add(TEntity entity);
        void Update(TEntity entity);
        Task<bool> SaveChangesAsync();
        Task<TEntity> FindByConditionAsync(Expression<Func<TEntity, bool>> predicate);

        List<TEntity> AllEager(params Expression<Func<TEntity, object>>[] includes);

        void Delete(TKey id);

    }
}
